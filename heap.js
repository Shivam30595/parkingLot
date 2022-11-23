class MinHeap{
    constructor(){
        this.values = [];
    }

    insert(value){
        this.values.push(value);
        let index = this.values.length-1;
        let parentIndex;
        while(index>0){
            parentIndex = Math.floor((index-1)/2);
            if(value<this.values[parentIndex]) [this.values[parentIndex], this.values[index]] = 
            [this.values[index], this.values[parentIndex]]
            index = parentIndex;
        }
        return this;
    }

    extractMin(){
        
        if(!this.values.length) return 0;
        let min = this.values[0];
        let end = this.values.pop();
        if(this.values.length > 0) {
            this.values[0] = end;
            this.sinkDown();
        }
        return min;
    }

    sinkDown(){
        let index = 0;
        let leftChildIndex;
        let rightChildIndex;
      
        while(((2*index)+1)<=this.values.length-1) {  
             leftChildIndex = 2*index + 1;
             rightChildIndex = 2*index + 2;
            if(this.values[index] < this.values[leftChildIndex]
                && this.values[index] < this.values[rightChildIndex]) break;
           
            if(this.values[leftChildIndex]<this.values[rightChildIndex]) {
               [this.values[index], this.values[leftChildIndex]] = [this.values[leftChildIndex], this.values[index]]
               index = leftChildIndex;
            } else if(this.values[rightChildIndex]<this.values[leftChildIndex]) {
               [this.values[index], this.values[rightChildIndex]] = [this.values[rightChildIndex], this.values[index]]
                index = rightChildIndex;
            }  else if(leftChildIndex === this.values.length-1 && this.values[leftChildIndex]<this.values[index]) {
                [this.values[index], this.values[leftChildIndex]] = [this.values[leftChildIndex], this.values[index]]
                break;
            } else {
                break;
            }
        }
     
    }
}

module.exports = MinHeap;