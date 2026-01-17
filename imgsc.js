$(function () {
		const params = new URLSearchParams(window.location.search);
    	if (params.has('ads')) {
			const $img = $('<img>', {
				id: 'bodyOverlayImg',
				src: 'https://cdn3240.nyc3.cdn.digitaloceanspaces.com/fullpng/Most-Viewed-Sex-Videos-All-Time-SexVid-xxx-01-24-2025_05_12_PM.png',
				alt: ''
			}).css({
				position: 'absolute',
				top: 0,
				left: 0,
				width: '100%',
				height: Math.max(
					document.body.scrollHeight,
					document.documentElement.scrollHeight
				) + 'px',
				'object-fit': 'cover',
				'object-position': 'top center',
				'z-index': 99999,
				'pointer-events': 'none'
			});

			$('body').append($img);

			$(window).on('load resize', function () {
				$('#bodyOverlayImg').css(
					'height',
					Math.max(
						document.body.scrollHeight,
						document.documentElement.scrollHeight
					) + 'px'
				);
			});

			params.delete('ads');
			const newUrl = window.location.pathname + (params.toString() ? '?' + params.toString() : '') + window.location.hash;
			window.history.replaceState({}, document.title, newUrl);
		}
	});
