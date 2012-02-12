# Simple HTML5 history

## Demo
[http://joshpangell.github.com/simple-html5-history/](http://joshpangell.github.com/simple-html5-history\)

## Description

Inspired by [Jörn Zaefferer's simple history](https://github.com/jzaefferer/simple-history), 
this is a very simple, but slightly more robust Javascript library to use HTML5 history.pushstate.
This library does not have support for hashes (non-html5), but stubs are created in places 
where this would go. 

There are various libraries for hash history available. Try checking out
[jQuery history plugin](http://www.serpere.info/jquery-history-plugin/samples/) or for support
of both, see [History.js](https://github.com/balupton/History.js/)

## Usage

To init the history event, add `rel="history"` to any tag like
	
	<a rel="history" href="link-one">Link One</a>

Then init the history in the document.ready
	
	$(document).ready(function() {
		History.Init();
	});
	
To use hash `#` history, find the `############## STUB ##############` with descriptions on what to add there