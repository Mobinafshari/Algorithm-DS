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

  public insert(word: string) {
    let node = this.root;

    for (const char of word) {
      if (!node.children.has(char)) {
        node.children.set(char, new TrieNode());
      }
      node = node.children.get(char)!;
    }

    node.isLastChar = true;
  }
  public search(word: string) {}
  public startsWith(prefix: string) {}
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
console.log(printTrie(trie.root));
