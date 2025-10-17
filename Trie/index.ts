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
  public autoComplete(prefix: string): string[] {
    let node = this.root;
    let words = [];
    for (const char of prefix) {
      if (node.children.has(char)) {
        node = node.children.get(char)!;
        continue;
      }
      return [];
    }

    for (const [key, val] of node.children) {
      if (val.isLastChar) {
        words.push(prefix + key);
      }
      if (val.children.size) {
        this.dfs(val, prefix + key, words);
      }
    }
    return words;
  }

  private dfs(node: TrieNode, prefix: string, words: string[]) {
    for (const [key, val] of node.children) {
      this.dfs(val, prefix + key, words);
      if (val.isLastChar) {
        words.push(prefix + key);
      }
    }
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
trie.insert("carbon");
trie.insert("car fix");
trie.insert("hashem");
trie.insert("hamid");
console.log(trie.autoComplete("ha"));
// console.log(printTrie(trie.root));
