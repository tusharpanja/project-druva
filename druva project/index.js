(function() {
    const btn = document.getElementById("shorten");
    const shortURLInput = document.getElementById("shorturl");
    const copyButton = document.getElementById("copy");
  
    btn.addEventListener('click', shortenURL);
  
    copyButton.onclick = () => {
      shortURLInput.select();
      window.navigator.clipboard.writeText(shortURLInput.value);
    }
  
    async function shortenURL() {
      const longURLInput = document.getElementById("longurl");
      const longURL = longURLInput.value.trim();
  
      if (!longURL) {
        // Handle case where no URL is entered
        return;
      }
  
      try {
        const response = await fetch(`https://api.shrtco.de/v2/shorten?url=${longURL}`);
        const data = await response.json();
  
        if (data && data.ok) {
          shortURLInput.value = data.result.short_link2;
        } else {
          // Handle API error
        }
      } catch (error) {
        // Handle network or other unexpected errors
      }
    }
  })();
  