class TrieNode {
  children: Map<string, TrieNode>;
  isLastChar: boolean;
  constructor() {
    this.children = new Map();
    this.isLastChar = false;
  }
}

class Trie {
  public insert(word: string) {
    new TrieNode(word);
  }
  public search(word: string) {}
  public startsWith(prefix: string) {}
}

const trie = new Trie();
console.log(trie.insert("hashem"));
