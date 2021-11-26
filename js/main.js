const app = new Vue({
	el: '#root',
	data: {
		images: [
			"https://i0.wp.com/www.meganerd.it/wp-content/uploads/2021/10/squid-game-1-1-e1633733959751.jpg?fit=1280%2C899&ssl=1",
			"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/ok-squidgame-season1-episode1-00-44-44-16-1634548372.jpg",
			"https://www.lascimmiapensa.com/wp-content/uploads/2021/10/squid-game-10.jpg",
			"https://st.ilfattoquotidiano.it/wp-content/uploads/2021/10/21/squidgame0011200.jpg",
			"https://www.rollingstone.it/wp-content/uploads/2021/11/0_Seong-Gi-Hun-Squid-Game-1178x765.jpg"
		],
		currentImg: 0
	},
	methods: {
		nextImage: function() {
			if( this.currentImg == this.images.length - 1 ) {
				this.currentImg = 0;
			} else {
				this.currentImg++;
			}
		},
		prevImage: function() {
			if ( this.currentImg == 0 ) {
				this.currentImg = this.images.length - 1;
			} else {
				this.currentImg--;
			}
		},
		selectImg: function(index) {
			this.currentImg = index;
		}
		// setActiveClass: function(index) {
		// 	if(index == this.currentImg) {
		// 		return 'active';
		// 	} else {
		// 		return '';
		// 	}
		// }
	}
});