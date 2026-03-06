def hanoi_solver(num: int)-> str:
    A = list(range(num, 0, -1))
    B = []
    C = []
    
    moves =[]
    moves.append(f'{A} {B} {C}')
    
    def move(source, destination):
        disk = source.pop()
        destination.append(disk)
        moves.append(f'{A} {B} {C}')
    
    def solve(n, source, auxiliary, destination):
        if n == 1:
            move(source, destination)
            return
        
        solve(n-1, source, destination, auxiliary)
        move(source, destination)
        solve(n-1, auxiliary, source, destination)
    
    solve(num, A, B, C)
    
    print("moves: ", len(moves) - 1)
    return "\n".join(moves)
    
    
print(hanoi_solver(2))