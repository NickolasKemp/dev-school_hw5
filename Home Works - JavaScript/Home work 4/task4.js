// Done
class PaginationHelper {

	constructor (collection, itemsPerPage) {
		this.collection = collection;
		this.itemsPerPage = itemsPerPage;
	}

	pageCount() {
		return Math.ceil(this.collection.length / this.itemsPerPage);
	}


	itemCount() {
		return this.collection.length;
	}

	pageItemCount(pageIndex) {
		if(pageIndex >= this.pageCount() || pageIndex < 0) {
			return -1;
		}

		if(pageIndex === this.pageCount() - 1) {
			return this.collection.length % this.itemsPerPage;
		}

		return this.itemsPerPage;
	}

	pageIndex(itemIndex) {
		if(itemIndex > this.collection.length || itemIndex < 0) {
			return -1;
		} 

		return Math.floor(itemIndex / this.itemsPerPage); 
		
	}
} 


const helper = new PaginationHelper(['a', 'b', 'c', 'd', 'e', 'f'], 4);


console.log(helper.pageItemCount(1)); 

console.log(helper.itemCount());

