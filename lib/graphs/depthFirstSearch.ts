// Do not edit the class below except
// for the depthFirstSearch method.
// Feel free to add new properties
// and methods to the class.
export class Node {
    name: string;
    children: Node[];

    constructor(name: string) {
        this.name = name;
        this.children = [];
    }

    addChild(name: string) {
        this.children.push(new Node(name));
        return this;
    }

    // O(v + e) time | O(v) space
    depthFirstSearch(array: string[]) {
        array.push( this.name );
        for ( const child of this.children )
        {
            child.depthFirstSearch( array );
        }
        return array;
    }
}
