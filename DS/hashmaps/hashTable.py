class HashTable:
    def __init__(self):
        self.collection = {}

    def hash(self, string):
        char_list =[ord(c) for c in string]
        return sum(char_list)

    def add(self, key, value):
        hash_value = self.hash(key)

        if hash_value not in self.collection:
            self.collection[hash_value] = {}
        
        self.collection[hash_value][key] = value
    
    def remove(self, key):
        hash_value = self.hash(key)

        if hash_value in self.collection:
            self.collection[hash_value].pop(key, None)
    
    def lookup(self, key):
        hash_value = self.hash(key)

        if hash_value not in self.collection:
            return None

        if key not in self.collection[hash_value]:
            return None
        
        return self.collection[hash_value][key]
        
test = HashTable()

test.add("a", "alex")
test.add("b", "brian")
test.remove("c")