// Design a data structure that supports adding new words and finding if a string matches any previously added string.

// Implement the WordDictionary class:

// WordDictionary() Initializes the object.
// void addWord(word) Adds word to the data structure, it can be matched later.
// bool search(word) Returns true if there is any string in the data structure that matches word or false otherwise. word may contain dots '.' where dots can be matched with any letter.

class WordNode {
  children: Map<string, WordNode>;
  isEnd: boolean;

  constructor() {
    this.children = new Map();
    this.isEnd = false;
  }
}

class WordDictionary {
  root: WordNode;

  constructor() {
    this.root = new WordNode();
  }

  addWord(word: string): void {
    let node = this.root;
    for (const char of word) {
      if (!node.children.has(char)) {
        node.children.set(char, new WordNode());
      }
      node = node.children.get(char)!;
    }
    node.isEnd = true;
  }

  search(word: string): boolean {
    const dfs = (index: number, node: WordNode): boolean => {
      if (index === word.length) return node.isEnd;

      const char = word[index];

      if (char === ".") {
        for (const child of node.children.values()) {
          if (dfs(index + 1, child)) return true;
        }
        return false;
      } else {
        if (!node.children.has(char)) return false;
        return dfs(index + 1, node.children.get(char)!);
      }
    };

    return dfs(0, this.root);
  }
}

function printWords(node: WordNode, prefix = "") {
  for (const [char, child] of node.children) {
    console.log(`${prefix}└── ${char}$`);
    printWords(child, prefix + "    ");
  }
}
const dic = new WordDictionary();
dic.addWord("mobin");
dic.addWord("mohsen");
console.log(dic.search("mo..en"));
console.log(printWords(dic.root));
