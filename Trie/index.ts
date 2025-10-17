class TrieNode {
  children: Map<string, TrieNode>;
  isLastChar: boolean;
  constructor() {
    this.children = new Map();
    this.isLastChar = false;
  }
}

class Trie {
  root: TrieNode;

  constructor() {
    this.root = new TrieNode();
  }

  public insert(word: string): void {
    let node = this.root;

    for (const char of word) {
      if (!node.children.has(char)) {
        node.children.set(char, new TrieNode());
      }
      node = node.children.get(char)!;
    }

    node.isLastChar = true;
  }
  public search(word: string): boolean {
    let node = this.root;
    for (const char of word) {
      if (node.children.has(char)) {
        node = node.children.get(char)!;
        continue;
      }
      return false;
    }
    return node.isLastChar;
  }
  public startsWith(prefix: string): boolean {
    let node = this.root;
    for (const char of prefix) {
      if (node.children.has(char)) {
        node = node.children.get(char)!;
        continue;
      }
      return false;
    }
    return true;
  }
}

function printTrie(node: TrieNode, prefix = "") {
  for (const [char, child] of node.children) {
    console.log(`${prefix}└── ${char}${child.isLastChar ? " 🟢" : ""}`);
    printTrie(child, prefix + "    ");
  }
}

const trie = new Trie();
trie.insert("cat");
trie.insert("car");
trie.insert("hashem");
console.log(trie.search("cat"));
// console.log(printTrie(trie.root));
