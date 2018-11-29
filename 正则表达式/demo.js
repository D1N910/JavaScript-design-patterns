
var ToggleButton = function(id, containerId) {
  var ifMiss = false

  var container = document.getElementById(containerId)
  var missButton = document.getElementById(id)

  var containerOldName = container.className
  var missButtonOldName = missButton.className


  this.changeToogle = function() {
    ifMiss = !ifMiss
    if (ifMiss) {
      container.className = containerOldName + " " + containerOldName + "_hidden"
      missButton.className = missButtonOldName + " " + missButtonOldName + "_left"
    } else {
      container.className = containerOldName
      missButton.className = missButtonOldName
    }
  }

  missButton.onclick = this.changeToogle

}

var GetRegExp = function() {

}

var regularExpressionMissButton = new ToggleButton('regularExpression_miss_button', "regularExpression_container")
