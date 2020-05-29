/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let node=new ListNode('head');
    let temp=node;
    let sum=0;
    let carry=0;
    while(l1||l2){
        const i=l1?l1.val:0;
        const j=l2?l2.val:0;
        sum=i+j+carry;
        temp.next=new ListNode(sum%10);
        temp=temp.next;

        carry=sum>=10?1:0;
        if(l1) l1=l1.next;
        if(l2) l2=l2.next;
    }
    carry&&(temp.next=new ListNode(carry));
    return node.next;
};