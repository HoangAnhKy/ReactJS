function Node(val = 0, next = null) {
    this.val = val;
    this.next = next;
}

function ListNode() {
    this.list = null;
}

ListNode.prototype.add = function (val, next) {
    let new_node = new Node(val, next);

    if (!this.list) {
        this.list = new_node;
    } else {
        let cur = this.list
        while (cur.next) {
            cur = cur.next;
        }
        cur.next = new_node

    }
}
ListNode.prototype.before = function (val, next) {
    let new_node = new Node(val, next);

    if (!this.list) {
        this.list = new_node;
    } else {
        new_node.next = this.list
        this.list = new_node
    }
}
ListNode.prototype.print = function () {
    let cur = this.list;
    let arr = [];
    if (cur) {
        while (cur) {
            arr.push(cur.val)
            cur = cur.next;
        }
    }

    console.log(arr.join(" "));
};
ListNode.prototype.insert = function (index, val) {
    let new_node = new Node(val);
    index -= 1
    let cur = this.list;
    if (!cur || index < 0) {
        if (index < 0){
            new_node.next = this.list;
        }
        this.list = new_node;
    } else
    {
        while (index !== 0 && cur.next) {
            index--;
            cur = cur.next;
        }
        if (cur.next) {
            new_node.next = cur.next
        }
        cur.next = new_node
    }
}
ListNode.prototype.delete = function (val) {
    let cur = this.list;
    if (!cur){
        return;
    }

    if (cur.val === val){
        this.list = this.list.next;
    }else{
        while (cur.next && cur.next.val !== val){
            cur = cur.next
        }
        cur.next = cur.next.next
    }
}
ListNode.prototype.remove = function (index){
   try {
       let cur = this.list;
       index -= 1;
       if (!cur){
           return null;
       }else if (index < 0){
           this.list = this.list.next;
       }else{
           while (index > 0 && cur.next !== null){
               cur = cur.next;
               index--;
           }
           if (cur.next && cur.next.next){
               cur.next = cur.next.next
           }
           if (index > 0){
               throw new Error("index vượt giá số lượng phần tử của list")
           }
       }
   }catch (e){
       console.log(e.message)
   }
}
// khởi tạo list
let list = new ListNode();

let arr = [1, 2];

// thêm list
for (let i of arr) {
    list.add(i)
}

list.before(0)              // thêm đầu
list.add(4)                 // thêm cuối
list.insert(3, 3)     // thêm bất kì
list.delete(4)              // xóa giá trị
list.remove(5)            // xóa vị trí
list.print()                    // in nó ra