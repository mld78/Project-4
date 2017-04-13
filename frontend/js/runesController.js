
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

self.uniqueMarks =[]
self.duplicateMarks=[]
self.totalMarks = []
self.removeMark = removeMark

// self.sameMarkCounter = 1

function setMark(rune){
	self.selectedMark = rune

	if (self.totalMarks.length === 0){
		self.uniqueMarks.push(self.selectedMark)

		console.log(self.uniqueMarks.length)
		console.log(self.totalMarks.length)

	}
	else {
		for (var i = 0; i<self.uniqueMarks.length; i++){
			if (self.selectedMark.name === self.uniqueMarks[i].name){
				self.duplicateMarks.push(self.selectedMark)
			}else {
				self.uniqueMarks.push(self.selectedMark)
			}

		}
	}

}





function removeMark(rune){
	self.selectedMark = rune
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
