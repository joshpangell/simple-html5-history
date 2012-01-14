
var History = {
		
	/**
	 *	Checks if this browser supports HTML5 history pushing
	 *	Returns true || false
	 */
	SupportSlashHistory : function() {
		return !!(window.history && window.history.pushState);
	},
	
	/**
	 *	Change the title of the page each load
	 */
	SetWindowTitle : function(title) {
		document.title = title;
	},
	
	/**
	 *	Pushes a location into history
	 *	Calls the "Update" function
	 *	Conditional on browser support
	 */
	Load : function(url, title) {
		if ( !History.SupportSlashHistory() ) {
			/*
			 ############## STUB ##############
			 This is the load event to "push" a new state
			 into history for non-html5 browsers
			*/
		
		} else {
			window.history.pushState({}, title, url);
		}
		
		History.Update(url);
	},
	
	/**
	 *	Function that fires as a callback to HTML5 hisotry push
	 *	All actions (such as AJAX load) go here
	 */
	Update : function(url) {
		this.notify(url);
		
		this.SetWindowTitle("History: "+url);
		$("<li>").text(url).appendTo("#log");
	},
	
	/**
	 *	Starts the HTML5 history plugin
	 */
	StartHistory : function(notify) {
		// use this notification method
		this.notify = notify;
		
		// Bind for the back/forward button
		setTimeout(function() {
			window.addEventListener("popstate", function() {
				History.Update(location.pathname);
			}, false);
		}, 1);
	},
	
	/**
	 *	Creates a URL to be displayed
	 */
	MakeLink : function(href) {
		// Remove the domain
		return href.replace("http://"+location.hostname, "");
	},
		
	/**
	 *	Takes all links with the rel= tag and binds them to the history
	 */
	BindLinks : function() {
		$("a[rel='history']").each(function() {
			$(this).data("hash", History.MakeLink( this.href ));
			
		}).click(function() {
			History.Load( $(this).data("hash") );
			
			return false;
		});
	},
	
	/**
	 *	Initialize the history plugin
	 *	Conditional on browser support
	 */
	Init : function(notify) {
		// Bind all the links found on the page
		History.BindLinks();
		
		if ( !History.SupportSlashHistory() ) {
			/*
			 ############## STUB ##############
			 This is the initialization event
			 to start history for non-html5 browsers
			*/
		
		} else {
		    // This browser supports HTML5 history
		    History.StartHistory(function(url) { });
		
		}
	}
	
};