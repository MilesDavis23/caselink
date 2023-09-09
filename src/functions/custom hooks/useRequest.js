import { useState } from 'react';

function useRequest(requestFunction) {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState(null)
    const [error, setError] = useState(null);

    const execute = async (...args) => {
        setLoading(true);
        try { 
            const response = await requestFunction(...args);
            setData(response.data);
            return response.data;
        } catch(err) {
            setError(err);
        } finally {
            setLoading(false);
        }
    }

    return { execute, loading, data, error };
};

export default useRequest;





// Definition for singly-linked list node
function ListNode(val, next = null) {
    this.val = val;
    this.next = next;
}

// Utility function to create a linked list from an array of values
function createLinkedListFromArray(arr) {
    if (arr.length === 0) return null;
    let head = new ListNode(arr[0]);
    let current = head;
    for (let i = 1; i < arr.length; i++) {
        current.next = new ListNode(arr[i]);
        current = current.next;
    }
    return head;
}

// Function to find the middle node
const findNode = (head) => {
    if (!head || !head.next) return head;
    let slow = head;
    let fast = head;
    do {
        if (!fast.next || !fast.next.next) {
            break;
        } 
        slow = slow.next;
        fast = fast.next.next;
    } while (true);
    return slow;
};

// Test
const arr = [1, 2, 3, 4, 5, 6, 7];
const head = createLinkedListFromArray(arr);
const middleNode = findNode(head);
console.log(middleNode.val); 