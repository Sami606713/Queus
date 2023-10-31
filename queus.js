/*
1-Node class
2-Queus Class
3-Insertation is always at tail
4- Deletion is always head
*/

// 1-Node class
class Node{
    constructor(value){
        this.value=value
        this.next=null
    }
}
// 2-Quesus class
class Queus{
    constructor(){
        this.head=null
        this.tail=null
        this.total_node=0
    }
// 3-Insertion
    enque(value){
        const new_node=new Node(value)
        if (this.head==null) {
            this.head=new_node
            this.tail=new_node
        } else {
            this.tail.next=new_node
            this.tail=new_node
        }
        this.total_node+=1
    }
    // 4-Delection
    deque(){
        if (this.head==null) {
            console.log("Empty Queus");
        } else {
            this.head=this.head.next
            this.total_node-=1
        }
       
    }
// 5- Peak Front
    peek_fro(){
        if (this.head==null) {
            console.log("Peak value is Empty")
        } else {
            console.log("peak front is: ",this.head.value);
        }
        
    }
// 6-peak_back
    peek_back(){
        if (this.head==null) {
            console.log("Peak  back value is Empty")
        } else {
            console.log("peak back is: ",this.tail.value)
        }

    }
    traverse(){
        let curr_node=this.head
        let result=""
        while (curr_node!=null) {
            result+=String(curr_node.value)+"->"
            curr_node=curr_node.next
        }
        return result.slice(0, -2);
    }
    // traverse(){
    //     let curr_node=this.head
    //     while (curr_node!=null) {
    //         console.log(curr_node.value)
    //         curr_node=curr_node.next
    //     }
    // }
}

const q=new Queus()
// 90->100->sami
// 100->sami
// sami
// []
q.enque(90)
q.enque(100)
q.enque("Sami")
q.enque("java")
q.deque()
// q.deque()
// q.deque()
// q.deque()
// // q.deque()
// q.peek_fro()
// q.peek_back()
console.log(q.traverse());
