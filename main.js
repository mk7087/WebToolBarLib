import version from "./version";
import ToolBar from "./toolbar";
function initToolBarsContainer() {
  var toolBarsContainer = document.createElement('div');
  toolBarsContainer.id = 'tbContainer';
  document.body.appendChild(toolBarsContainer);
  var toolbar = new ToolBar(toolBarsContainer);
}

if (window.navigator.userAgent.match(/(msie|MSIE)/) || window.navigator.userAgent.match(/(T|t)rident/)) {
  window.attachEvent('onload', initToolBarsContainer);
} else {
  window.addEventListener('DOMContentLoaded', initToolBarsContainer, false);
}
console.log('WebToolBarLib Loading.     version:' + version.versionText);