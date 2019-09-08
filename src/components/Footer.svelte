<!--
  Footer component.
-->
<script>
  import Divider from './Divider.svelte';

  // Get the current year to show in the copyright message.
  const currentYear = new Date().getFullYear().toString();
</script>

<style>
  .column {
    padding-bottom: 5px;
  }

  .copyright {
    padding-left: 20px;
  }

  .footer {
    bottom: 0;
    font-size: 0.7rem;
    height: 2rem;
    position: absolute;
    width: 100%;
  }
  
  @media screen and (min-width: 800px) {
    .footer {
      font-size: 0.8rem;
    }
  }
  
  .footer-privacy {
    font-weight: bold;
    padding: 10px;
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
    <span class="copyright"> <!-- cookie and privacy policies -->
      <a href="https://www.iubenda.com/privacy-policy/41964441" class="iubenda-nostyle no-brand iubenda-embed" title="Privacy Policy ">Privacy Policy</a><script type="text/javascript">(function (w,d) {var loader = function () {var s = d.createElement("script"), tag = d.getElementsByTagName("script")[0]; s.src="https://cdn.iubenda.com/iubenda.js"; tag.parentNode.insertBefore(s,tag);}; if(w.addEventListener){w.addEventListener("load", loader, false);}else if(w.attachEvent){w.attachEvent("onload", loader);}else{w.onload = loader;}})(window, document);</script>
      <a href="https://www.iubenda.com/privacy-policy/41964441/cookie-policy" class="iubenda-nostyle no-brand iubenda-embed footer-privacy " title="Cookie Policy ">Cookie Policy</a><script type="text/javascript">(function (w,d) {var loader = function () {var s = d.createElement("script"), tag = d.getElementsByTagName("script")[0]; s.src="https://cdn.iubenda.com/iubenda.js"; tag.parentNode.insertBefore(s,tag);}; if(w.addEventListener){w.addEventListener("load", loader, false);}else if(w.attachEvent){w.attachEvent("onload", loader);}else{w.onload = loader;}})(window, document);</script>
    </span>
  </div>
</footer>