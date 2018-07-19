/* To avoid CSS expressions while still supporting IE 7 and IE 6, use this script */
/* The script tag referencing this file must be placed before the ending body tag. */

/* Use conditional comments in order to target IE 7 and older:
	<!--[if lt IE 8]><!-->
	<script src="ie7/ie7.js"></script>
	<!--<![endif]-->
*/

(function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'sendicon\'">' + entity + '</span>' + html;
	}
	var icons = {
		'sendicon-icon-line': '&#xe95f;',
		'sendicon-icon-routes': '&#xe960;',
		'sendicon-icon-route': '&#xe95e;',
		'sendicon-icon-assign-door': '&#xe95d;',
		'sendicon-icon-multicase': '&#xe95c;',
		'sendicon-icon-question': '&#xe95b;',
		'sendicon-icon-toast': '&#xe950;',
		'sendicon-icon-trade': '&#xe951;',
		'sendicon-icon-transfer': '&#xe952;',
		'sendicon-icon-u-turn': '&#xe953;',
		'sendicon-icon-ui': '&#xe954;',
		'sendicon-icon-ux': '&#xe955;',
		'sendicon-icon-vehicle': '&#xe956;',
		'sendicon-icon-wheat': '&#xe957;',
		'sendicon-icon-rocket': '&#xe958;',
		'sendicon-icon-setting': '&#xe959;',
		'sendicon-icon-star': '&#xe95a;',
		'sendicon-icon-7': '&#xe900;',
		'sendicon-icon-add': '&#xe901;',
		'sendicon-icon-alarm': '&#xe902;',
		'sendicon-icon-arrow-left': '&#xe903;',
		'sendicon-icon-arrow-right': '&#xe904;',
		'sendicon-icon-attachment': '&#xe905;',
		'sendicon-icon-bag': '&#xe906;',
		'sendicon-icon-barcode': '&#xe907;',
		'sendicon-icon-calendar': '&#xe908;',
		'sendicon-icon-camera': '&#xe909;',
		'sendicon-icon-cash': '&#xe90a;',
		'sendicon-icon-checkbox-checked': '&#xe90b;',
		'sendicon-icon-checkbox-uncheck': '&#xe90c;',
		'sendicon-icon-checked': '&#xe90d;',
		'sendicon-icon-checkout': '&#xe90e;',
		'sendicon-icon-clock-active': '&#xe90f;',
		'sendicon-icon-clock-history': '&#xe910;',
		'sendicon-icon-clock-schedule': '&#xe911;',
		'sendicon-icon-close': '&#xe912;',
		'sendicon-icon-courier': '&#xe913;',
		'sendicon-icon-crossed': '&#xe914;',
		'sendicon-icon-dashboard-2': '&#xe915;',
		'sendicon-icon-dashboard-3': '&#xe916;',
		'sendicon-icon-dashboard-4': '&#xe917;',
		'sendicon-icon-dashboard-full': '&#xe918;',
		'sendicon-icon-dashboard': '&#xe919;',
		'sendicon-icon-data-entry': '&#xe91a;',
		'sendicon-icon-delivering': '&#xe91b;',
		'sendicon-icon-department': '&#xe91c;',
		'sendicon-icon-document': '&#xe91d;',
		'sendicon-icon-dollar': '&#xe91e;',
		'sendicon-icon-driver': '&#xe91f;',
		'sendicon-icon-edit': '&#xe920;',
		'sendicon-icon-email': '&#xe921;',
		'sendicon-icon-expand': '&#xe922;',
		'sendicon-icon-fullscreen': '&#xe923;',
		'sendicon-icon-getting-location': '&#xe924;',
		'sendicon-icon-group': '&#xe925;',
		'sendicon-icon-home': '&#xe926;',
		'sendicon-icon-info': '&#xe927;',
		'sendicon-icon-less-circle': '&#xe928;',
		'sendicon-icon-less': '&#xe929;',
		'sendicon-icon-list': '&#xe92a;',
		'sendicon-icon-loading': '&#xe92b;',
		'sendicon-icon-location': '&#xe92c;',
		'sendicon-icon-lock': '&#xe92d;',
		'sendicon-icon-menu-active': '&#xe92e;',
		'sendicon-icon-message': '&#xe92f;',
		'sendicon-icon-money': '&#xe930;',
		'sendicon-icon-moneybag': '&#xe931;',
		'sendicon-icon-more-circle': '&#xe932;',
		'sendicon-icon-more-icon': '&#xe933;',
		'sendicon-icon-more': '&#xe934;',
		'sendicon-icon-office': '&#xe935;',
		'sendicon-icon-parcel': '&#xe936;',
		'sendicon-icon-people-circle': '&#xe937;',
		'sendicon-icon-people': '&#xe938;',
		'sendicon-icon-phone': '&#xe939;',
		'sendicon-icon-pickup': '&#xe93a;',
		'sendicon-icon-pin-map': '&#xe93b;',
		'sendicon-icon-pin': '&#xe93c;',
		'sendicon-icon-pop-out': '&#xe93d;',
		'sendicon-icon-poweroff': '&#xe93e;',
		'sendicon-icon-profile': '&#xe93f;',
		'sendicon-icon-recieve-cod': '&#xe940;',
		'sendicon-icon-return': '&#xe941;',
		'sendicon-icon-search': '&#xe942;',
		'sendicon-icon-send': '&#xe943;',
		'sendicon-icon-settings': '&#xe944;',
		'sendicon-icon-sorting': '&#xe945;',
		'sendicon-icon-statistic': '&#xe946;',
		'sendicon-icon-sync': '&#xe947;',
		'sendicon-icon-timer': '&#xe948;',
		'sendicon-icon-trash': '&#xe949;',
		'sendicon-icon-unview': '&#xe94a;',
		'sendicon-icon-upload': '&#xe94b;',
		'sendicon-icon-view': '&#xe94c;',
		'sendicon-icon-warehouse': '&#xe94d;',
		'sendicon-icon-world-minimal': '&#xe94e;',
		'sendicon-icon-world': '&#xe94f;',
		'0': 0
		},
		els = document.getElementsByTagName('*'),
		i, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		c = el.className;
		c = c.match(/sendicon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());
