function ADTabber( menu_selector ) {
	this.$menu 		= $(menu_selector).getElements('a')
	this.$tablist	= {}
	this._init()
}

ADTabber.prototype._init = function() {
	var self = this,
		$tab = null,
		href = null

	// Cache and hide the tabs
	for (var i=0; i<this.$menu.length; i++) {
		href = $(this.$menu[i]).get('href')
		$tab = $(this).getElements('a[href^='+href+']')
		console.log($tab)
		this.$tablist[href] = $tab
	}
	this._hideTabs()
	this._showTab( this.$menu[0] )

	// bind click
	this.$menu.addEvent('click',function(e) {
		e.preventDefault()
		self._showTab( this )
	})
}

ADTabber.prototype._hideTabs = function() {
	this.$menu.removeClass('active')
	for (tab in this.$tablist) {
		this.$tablist[tab].hide()
	}
}

ADTabber.prototype._showTab = function( menu ) {
	var $this 	= $(menu),
		$tab 	= this.$tablist[$this.get('href')]

	this._hideTabs()
	$tab.show()
	$this.addClass('active')
}