class Trie {
  words: string[];
  constructor() {
    this.words = [];
  }

  public insert(word: string): void {
    this.words = [...this.words, word];
  }

  public search(word: string): boolean {
    return this.words.includes(word);
  }

  public startsWith(prefix: string): boolean {
    return this.words.some((word) => word.startsWith(prefix));
  }
}

const trie = new Trie();
trie.insert("cat");
console.log(trie.search("cat"));
console.log(trie.startsWith("ca"));
