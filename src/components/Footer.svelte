<script>
  import Divider from './Divider.svelte';

  const currentYear = new Date().getFullYear().toString();
</script>

<style>
  .footer {
    width: 100%;
    position: absolute;
    bottom: 0;
    font-size: 0.7rem;
    height: 2rem;
  }

  .copyright {
    padding-left: 20px;
  }

  @media screen and (min-width: 800px) {
    .footer {
      font-size: 0.8rem;
    }
  }

  .footer-privacy {
    padding: 10px;
    font-weight: bold;
  }

  .column {
    padding-bottom: 5px;
  }
</style>

<footer class="footer">
  <Divider />
  <div class="column one-thrid">
    <span class="copyright">
        &copy; 2016 - {currentYear} Codescapade. All rights reserved.
    </span>
      
  </div>
  <div class="column one-third">
    <span class="copyright">
      <a href="https://www.iubenda.com/privacy-policy/41964441" class="iubenda-nostyle no-brand iubenda-embed" title="Privacy Policy ">Privacy Policy</a><script type="text/javascript">(function (w,d) {var loader = function () {var s = d.createElement("script"), tag = d.getElementsByTagName("script")[0]; s.src="https://cdn.iubenda.com/iubenda.js"; tag.parentNode.insertBefore(s,tag);}; if(w.addEventListener){w.addEventListener("load", loader, false);}else if(w.attachEvent){w.attachEvent("onload", loader);}else{w.onload = loader;}})(window, document);</script>
      <a href="https://www.iubenda.com/privacy-policy/41964441/cookie-policy" class="iubenda-nostyle no-brand iubenda-embed footer-privacy " title="Cookie Policy ">Cookie Policy</a><script type="text/javascript">(function (w,d) {var loader = function () {var s = d.createElement("script"), tag = d.getElementsByTagName("script")[0]; s.src="https://cdn.iubenda.com/iubenda.js"; tag.parentNode.insertBefore(s,tag);}; if(w.addEventListener){w.addEventListener("load", loader, false);}else if(w.attachEvent){w.attachEvent("onload", loader);}else{w.onload = loader;}})(window, document);</script>
    </span>
  </div>
</footer>