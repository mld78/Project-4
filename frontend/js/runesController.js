
	angular.module("LoLStats")
		     .controller("RunesController", RunesController)

  RunesController.$inject = ["RuneFactory"]

	function RunesController(RuneFactory){
		var self = this

    RuneFactory.show()
    .success(function(data) {
      for(rune in data.data) {
        self.runeList.push(data.data[rune])
      }
      console.log(self.runeList)
      console.log("Testing 123")

    })



    //toggle buttons in select rune list
    self.isCollapsed1 = true
    self.isCollapsed2 = true
    self.isCollapsed3 = true
    self.isCollapsed4 = true


    //set max number of items in selected rune list
    self.maxMarks = 9
    self.maxGlyphs = 9
    self.maxSeals = 9
    self.maxQuints = 4

    console.log("Runes controller accessed...")
		// self.all = []
    self.runeList = []






//move a selected mark from the available mark list to the selected runes list
self.selectedMark = {}
self.setMark = setMark
self.totalMarks =[]
self.removeMark = removeMark
// self.moreThanOneMark = moreThanOneMark
self.sameMarkCounter = 1


function setMark(rune){
  self.selectedMark = rune
  if(self.totalMarks.length<9){
    self.totalMarks.push(self.selectedMark)
  }
  console.log(self.selectedMark)
}

function removeMark(rune){
	self.selectedMark = rune
	self.totalMarks.splice(self.selectedMark, 1)
}

// function uniqueMarks(){
// 	var result =[]
// 	for (var i =0; i<totalMarks.length;i++){
//
// 	}
// }










//move a selected glyph from the available glyph list to the selected runes list
self.selectedGlyph = {}
self.setGlyph = setGlyph
self.totalGlyphs =[]
self.removeGlyph = removeGlyph


function setGlyph(rune){
  self.selectedGlyph = rune
  if (self.totalGlyphs.length<9){
  self.totalGlyphs.push(self.selectedGlyph)
}
  console.log(self.selectedGlyph)
}

function removeGlyph(rune){
	self.selectedGlyph = rune
	self.totalGlyphs.splice(self.selectedGlyph, 1)
}











//move a selected seal from the available seal list to the selected runes list
self.selectedSeal = {}
self.setSeal = setSeal
self.totalSeals =[]
self.removeSeal = removeSeal


function setSeal(rune){
  self.selectedSeal = rune
  if (self.totalSeals.length < 9){
  self.totalSeals.push(self.selectedSeal)
}
  console.log(self.selectedSeal)
}

function removeSeal(rune){
	self.selectedSeal = rune
	self.totalSeals.splice(self.selectedSeal, 1)
}

//move a selected quint from the available quint list to the selected runes list
self.selectedQuint = {}
self.setQuint = setQuint
self.totalQuints =[]
self.removeQuint = removeQuint


function setQuint(rune){
  self.selectedQuint = rune
  if (self.totalQuints.length<3){
  self.totalQuints.push(self.selectedQuint)
}
  console.log(self.selectedQuint)
}

function removeQuint(rune){
	self.selectedQuint = rune
	self.totalQuints.splice(self.selectedQuint, 1)
}




  }
