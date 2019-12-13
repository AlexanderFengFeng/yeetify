/**
 * @fileoverview Description of this file.
 */
var elements = document.getElementsByTagName('*');

for (var i = 0; i < elements.length; i++) {
  var element = elements[i];

  for (var j = 0; j < element.childNodes.length; j++) {
    var node = element.childNodes[j];

    // nodeType is Text
    if (node.nodeType === 3) {
      var text = node.nodeValue;
      console.log(text);
      var replacedText = text.replace(/throw/gi, 'YEET');
      replacedText = replacedText.replace(/threw/gi, 'YEETED');
      if (replacedText != text) {
        element.replaceChild(document.createTextNode(replacedText), node)
      }
    }
  }
}
