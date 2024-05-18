export default function TodoItem(){
    return (
        <div className="flex shadow p-2 mb-2 justify-between">
          <div className="flex">

            <div className="round mr-4">
              <input type="checkbox" id="checkbox" />
              <label htmlFor="checkbox"></label>
            </div>


            <span>hacker Rank problem solving part 2
                <p className="text-xs text-gray-400">date</p>
            </span>
          </div>
          <div className="flex">
            <button className="mx-2">E</button>
            <button>D</button>
          </div>
        </div>
    )
}