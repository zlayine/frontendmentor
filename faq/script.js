var app = new Vue({
	el: '#app',
	data() {
		return {
			active: null,
			items: [{
				id: 0,
				title: "How many tabs ?",
				description: "There is 4 tabs but i don't know what to write in them.",
			},
			{
				id: 1,
				title: "Does this look good ?",
				description: "Yes.",
			},
			{
				id: 2,
				title: "Can i open this ?",
				description: "Yes you can open, now close it..",
			},
			{
				id: 3,
				title: "Whats inside here ?",
				description: "Nothing.",
			}
			]
		}
	},
	methods: {
		setActive(id){
			if (this.active === id)
				this.active = null;
			else
				this.active = id;
		}
	}
  });