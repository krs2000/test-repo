import React from 'react'
import InfiniteScroll from 'react-simple-infinite-scroll'
import MyListItem from "./Item"


// functional stateless component
const MiniVideos = ({ list }) =>
  <div className="list">
    {list.map(item => <div className="list-row" key={item.objectID}>
      <a href={item.url}>{item.title}</a>
    </div>)}
  </div>

// React ES6 class component
class List extends React.Component {
  render() {
    const { list } = this.props;
    return (
      <div className="list">
        {list.map(item => <div className="list-row" key={item.objectID}>
          <a href={item.url}>{item.title}</a>
        </div>)}
      </div>
    );
  };
}


// export class MyInfiniteScrollExample extends React.Component {
//   state = {
//     items: [],
//     isLoading: true,
//     cursor: 0
//   }

  // componentDidMount() {
    // do some paginated fetch
  //   this.loadMore()
  // }
    // fetch(`https://jsonplaceholder.typicode.com/users?from=${this.state.cursor}`)
  // loadMore = () => {
    // this.setState({ isLoading: true, error: undefined })
    // fetch(`https://jsonplaceholder.typicode.com/users`)
    //   .then(res => res.json())
    //   .then(
    //     res => {
    //       this.setState(state => ({ 
    //         items: [...state.items, ...res.items], 
    //         cursor: res.cursor,
    //         isLoading: false 
    //       }))
    //     },
    //     error => {
    //       this.setState({ isLoading: false, error })
    //     }
    // )
//   }

//   render() {
//     return (
//       <div>
//  <InfiniteScroll
//           throttle={100}
//           threshold={300}
//           isLoading={this.state.isLoading}
//           hasMore={!!this.state.cursor}
//           onLoadMore={this.loadMore}
//         >
//           {this.state.items.length > 0 
//             ? this.state.items.map(item => (
//                 <MyListItem key={item.id} title={item.title} />
//               ))
//             : null}
//         </InfiniteScroll>
//         {this.state.isLoading && (
//          `Loading..`
//         )}
//       </div>
//     )
//   }
// }