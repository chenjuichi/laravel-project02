<template>
	<div>

	</div>
</template>

<script>

export default {
	props: {

	},
	mixins: [

	],
	created() {

	},
	data() {
		return {

		};
	},
	computed: {

	},
    watch: {

    },
	methods: {
		async check() {
			this.loading = true;
			this.errors = null;

			// start async block
			try {
				this.status = (await axios.get(
					'/api/roles/' + this.bookableId + '/availability?from=' + this.from + '&to=' + this.to
				)).status;

				this.$emit("availability", this.hasAvailability);

			} catch(err) {
				if (is422(err)) {
					this.errors = err.response.data.errors;
				}

				this.status = err.response.status;
				this.$emit("availability", this.hasAvailability);

			}
			this.loading = false;
		},
		// end async block

			//if(!isRegexpDate(this.from) && this.from !== null)
			//	this.from = null;
			//
			//if(!isRegexpDate(this.to) && this.to !== null)
			//	this.to = null;

		//modify the following into async block
		/*			axios
			//.get('/api/bookables/' + this.$route.params.id + '/availability?from=' + this.from + '&to=' + this.to)
			.get('/api/bookables/' + this.bookableId + '/availability?from=' + this.from + '&to=' + this.to)
			.then(response => {
				this.status = response.status;
			})
			.catch(error => {
        		console.log("ERROR DATA => ", error.response.data);
        		console.log("ERROR STATUS => ", error.response.status);
        		console.log("ERROR DATA ERRORS => ", error.response.data.errors);
        		console.log("ERROR DATA message => ", error.response.data.message);
        		console.log("ERROR HEADERS => ", error.response.headers);

				if (is422(error)) {
					this.errors = error.response.data.errors;
				}
				this.status = error.response.status;
			})
			.then(() => (this.loading = false));
		},
		*/

		/*
		errorFor(field) {
			console.log("errorFor this.errors data => ", this.errors);
			console.log("errorFor this field => ", field);
			console.log("errorFor this.hasErrors => ", this.hasErrors);
			if (field == "from" && this.hasErrors) {
				//console.log("errors For from => ", this.errors.from);
				return this.errors.from;
			}
			if (field == "to" && this.hasErrors) {
				//console.log("errors For to => ", this.errors.to);
				return this.errors.to;
			}

			return null;
		},
		*/
		//because add mixins, so remove the following method...
		//errorFor(field) {
		//	return this.hasErrors && this.errors[field] ? this.errors[field] : null;
		//},
	},	//end methods:
};
</script>

<style scoped>
label {
	font-size: 0.7rem;
	text-transform: uppercase;
	color: gray;
	font-weight: bolder;
}

.is-invalid {
	border-color: #b22222;
	background-image: none;
}

.invalid-feedback {
	border-color: #b22222;
	background-image: none;
}
</style>
