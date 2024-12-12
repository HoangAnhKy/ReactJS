function Node(val = 0, next = null, prev = null) {
    this.val = val;
    this.next = next;
    this.prev = prev;
}

function ListNode() {
    this.head = null;
    this.tail = null;
}
ListNode.prototype.add = function (val, next) {
    let new_node = new Node(val);

    if (!this.head) {
        this.head = new_node;
        this.tail = new_node;
    } else {
        this.tail.next = new_node;
        new_node.prev = this.tail;
        this.tail = new_node
    }
}
ListNode.prototype.print = function () {
    let arr_head = []
    let arr_tail = []
    let cur = this.head
    while (cur){
        arr_head.push(cur.val)
        cur = cur.next
    }

    cur = this.tail
    while (cur){
        arr_tail.push(cur.val)
        cur = cur.prev
    }
    console.log("head: " + arr_head.join(" "))
    console.log("\n")
    console.log("tail: " + arr_tail.join(" "))
}
ListNode.prototype.before = function (val) {
    let new_node = new Node(val);

    if (!this.tail){
        this.head = new_node;
        this.tail = new_node;
    }else {
        new_node.next = this.head;
        this.head.prev = new_node;
        this.head = new_node
    }
}
ListNode.prototype.delete = function (val){
    let cur = this.head;
    if (!cur){
        return
    }
    if (cur.val === val){
        let point_delete = cur;
        this.head = point_delete.next
        point_delete.next.prev = cur.prev;
    }
    else {
        while (cur.next && cur.next.val !== val){
            cur = cur.next
        }
        let point_delete = cur.next;
        cur.next = point_delete.next;
        if (point_delete.next){
            point_delete.next.prev = cur;
        }else{
            this.tail = cur
        }

    }
}

ListNode.prototype.insert = function (index, val){
    let cur = this.head;
    let new_node = new Node(val);
    if (!cur ){
        this.tail = new_node;
        this.head = new_node;
    }else if (index === 0) {
        cur.prev = new_node;
        new_node.next = this.head;
        this.head = new_node;
    }
    else {
        index -= 1;
        while (index > 0 && cur){
            cur = cur.next;
            index--;
        }
        if (index > 0 || !cur){
            console.log("Index vượt quá giới hạn của list");
            return
        }
        let next = cur.next;
        new_node.next = next;
        new_node.prev = cur

        if (next){
            next.prev = new_node
        }else{
            this.tail = new_node
        }

        cur.next = new_node;
    }
}

// khởi tạo list
let list = new ListNode();
let arr = [1,2,3];
for (let i of arr){
    list.before(i);
}

list.add(0)
list.before(4)
list.add(-1)
list.delete(0)
list.insert(0, 8);
list.print();
