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
      console.log(node);
      node = node.children.get(char)!;
    }

    node.isLastChar = true;
  }
  public search(word: string) {}
  public startsWith(prefix: string) {}
}

const trie = new Trie();
console.log(trie.insert("hashem"));
