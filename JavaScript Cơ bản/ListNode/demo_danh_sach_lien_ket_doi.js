function Node (val){
    this.val = val;
    this.next = null;
    this.prev = null;
}

class ListNode{
    #head;
    #tail;

    add(val){
        let new_node = new Node(val);
        if (!this.#tail){
            this.#tail = new_node;
            this.#head = new_node;
        }else{
            this.#tail.next = new_node;
            new_node.prev = this.#tail
            this.#tail = new_node;
        }
    }

    before(val){

        let new_node = new Node(val);
        if (!this.#head){
            this.#tail = new_node;
            this.#head = new_node;
        }else{
            new_node.next = this.#head;
            this.#head.prev = new_node;
            this.#head = new_node;
        }
    }

    insertBefore(index, val){

        let new_node = new Node(val);
        if (!this.#head){
            this.#tail = new_node;
            this.#head = new_node;
        }
        else if (index === 0){
            new_node.next = this.#head;
            this.#head.prev = new_node;
            this.#head = new_node;
        }
        else{
            let cur = this.#head;
            while(index > 1 && cur){
                index--;
                cur = cur.next;
            }
            let next = cur.next;

            cur.next = new_node;
            new_node.next = next;

            if(next){
                next.prev = new_node;
            }else{
                this.#tail = new_node;
            }
            new_node.prev = cur;
        }
    }

    insertAfter(index, val){
        let new_node = new Node(val);

        if(!this.#tail){
            this.#head = new_node;
            this.#tail = new_node;
        }
        else if(index === 0){
            new_node.prev = this.#tail;
            this.#tail.next = new_node
            this.#tail = new_node;
        }
        else {
            let cur = this.#tail
            while(index > 1 && cur){
                index--;
                cur = cur.prev;
            }
            let temp = cur.prev;

            cur.prev = new_node;
            new_node.prev = temp;

            if(temp){
                new_node.next = temp.next
                temp.next = new_node;
            }else{
                new_node.next = this.#head;
                this.#head = new_node;
            }
        }
    }


    print(){
        let head = [];
        let tail = [];
        let cur_head = this.#head;
        let cur_tail = this.#tail;

        while(cur_head){
            head.push(cur_head.val);
            cur_head = cur_head.next;
        }

        while(cur_tail){
            tail.push(cur_tail.val);
            cur_tail = cur_tail.prev;
        }

        console.log("head: " + head.join(" "));
        console.log("tail: " + tail.join(" "));
    }

    addList(arr){
        for(let i of arr){
            this.add(i);
        }
    }

    remove(val){
        let cur = this.#head;
        if (cur && cur.val === val){
            this.#head = this.#head.next;
            this.#head.prev = cur.prev;
        }else if(cur){
            while(cur.next && cur.next.val !== val){
                cur = cur.next;
            }
            let node_delete = cur.next;

            cur.next = node_delete.next;
            if (node_delete.next){
                cur.next.prev = node_delete.prev
            }else{
                this.#tail = cur
            }
        }
    }


}


let list = new ListNode;
list.addList([1,2,3]);
list.add(5)
list.before(0)
list.insertBefore(0, -1);
list.insertBefore(5, 4);
list.insertAfter(0, 6);
list.remove(-1);
list.print();
