
	angular.module("LoLStats")
		     .controller("RunesController", RunesController)

  RunesController.$inject = ["RuneFactory"]

	function RunesController(RuneFactory){
		var self = this

    RuneFactory.show()
    .success(function(data) {
			console.log(JSON.parse(data))
			var runes = JSON.parse(data).data
      for(rune in runes) {
        self.runeList.push(runes[rune])
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
self.totalMarksCount = 0


function setMark(rune){
  self.selectedMark = rune
  if (self.totalMarksCount<9){
		var duplicateMark = self.totalMarks.find(function(rune){
			return rune.rune.id == self.selectedMark.id
		})
		console.log(duplicateMark)
		if (!duplicateMark){
			self.totalMarks.push({count:1, rune:self.selectedMark})
		}else{
			var currentMark = self.totalMarks[self.totalMarks.indexOf(duplicateMark)]
			currentMark.count++
		}
			self.totalMarksCount++

}
  console.log(self.selectedMark)
}





function removeMark(rune){
	self.selectedMark = rune
	if (self.totalMarksCount<9){
		var duplicateMark = self.totalMarks.find(function(rune){
			return rune.rune.id == self.selectedMark.id
		})
	self.totalMarks.splice(self.selectedMark, 1)
}












//move a selected glyph from the available glyph list to the selected runes list
self.selectedGlyph = {}
self.setGlyph = setGlyph
self.totalGlyphs =[]
self.removeGlyph = removeGlyph
self.totalGlyphsCount = 0


function setGlyph(rune){
  self.selectedGlyph = rune
  if (self.totalGlyphsCount<9){
		var duplicateGlyph = self.totalGlyphs.find(function(rune){
			return rune.rune.id == self.selectedGlyph.id
		})
		console.log(duplicateGlyph)
		if (!duplicateGlyph){
			self.totalGlyphs.push({count:1, rune:self.selectedGlyph})
		}else{
			var currentGlyph = self.totalGlyphs[self.totalGlyphs.indexOf(duplicateGlyph)]
			currentGlyph.count++
		}
			self.totalGlyphsCount++

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
self.totalSealsCount = 0


function setSeal(rune){
  self.selectedSeal = rune
  if (self.totalSealsCount<9){
		var duplicateSeal = self.totalSeals.find(function(rune){
			return rune.rune.id == self.selectedSeal.id
		})
		console.log(duplicateSeal)
		if (!duplicateSeal){
			self.totalSeals.push({count:1, rune:self.selectedSeal})
		}else{
			var currentSeal = self.totalSeals[self.totalSeals.indexOf(duplicateSeal)]
			currentSeal.count++
		}
			self.totalSealsCount++

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
self.totalQuintsCount = 0


function setQuint(rune){
  self.selectedQuint = rune
  if (self.totalQuintsCount<3){
		var duplicateQuint = self.totalQuints.find(function(rune){
			return rune.rune.id == self.selectedQuint.id
		})
		console.log(duplicateQuint)
		if (!duplicateQuint){
			self.totalQuints.push({count:1, rune:self.selectedQuint})
		}else{
			var currentQuint = self.totalQuints[self.totalQuints.indexOf(duplicateQuint)]
			currentQuint.count++
		}
			self.totalQuintsCount++

}
  console.log(self.selectedQuint)
}





function removeQuint(rune){
	self.selectedQuint = rune
	self.totalQuints.splice(self.selectedQuint, 1)
}




  }
