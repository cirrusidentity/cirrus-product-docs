const fs = require('fs');
const path = require('path');

// 1. Define your snippet codes exactly
const GOOGLE_ANALYTICS_CODE = `
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-0RL017ZRXK"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-0RL017ZRXK');
</script>
`;

const HUBSPOT_CODE = `
<!-- Start of HubSpot Embed Code -->
<script type="text/javascript" id="hs-script-loader" async defer src="//js.hs-scripts.com/2120505.js"></script>
<!-- End of HubSpot Embed Code -->
`;

// 2. Change "dist" below to your actual build output directory if different
const BUILD_DIR = path.join(__dirname, 'docs');

function processDirectory(dir) {
  if (!fs.existsSync(dir)) return;
  const files = fs.readdirSync(dir);

  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      processDirectory(filePath); // Recursive scan
    } else if (path.extname(file) === '.html') {
      let content = fs.readFileSync(filePath, 'utf8');

      // Inject Google Analytics directly below the opening <head> tag
      if (content.includes('<head>')) {
        content = content.replace('<head>', `<head>${GOOGLE_ANALYTICS_CODE}`);
      } else if (content.includes('<HEAD>')) {
        content = content.replace('<HEAD>', `<HEAD>${GOOGLE_ANALYTICS_CODE}`);
      }

      // Inject HubSpot code directly above the closing </body> tag
      if (content.includes('</body>')) {
        content = content.replace('</body>', `${HUBSPOT_CODE}</body>`);
      } else if (content.includes('</BODY>')) {
        content = content.replace('</BODY>', `${HUBSPOT_CODE}</BODY>`);
      }

      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Successfully updated tracking tags in: ${file}`);
    }
  });
}

processDirectory(BUILD_DIR);
