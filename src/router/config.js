import NewSong from '../views/new-song/newsong';
import Rank from '../views/rank/rank';
import Singer from '../views/singer/singer';
import SingerInfo  from '../views/singer/singer-info/singer-info';
import SingerList  from '../views/singer/singer-list/singer-list';
import RankInfo from '../views/rank/rank-info'
import Plist from '../views/plist/plist'
import PlistInfo from '../views/plist/plist-info';
import Search from '../views/search/search'
export let navConfig = [
    {
        path : '/',
        title : '新歌',
        component : NewSong

    },
    {
        path : '/rank',
        title : '排行',
        component : Rank
        
    },
    {
        path : '/plist',
        title : '歌单',
        component : Plist
        
    },
    {
        path : '/singer',
        title : '歌手',
        component : Singer
        
    }
]
export let two = [
    {
      path: '/singer/list/:id',
      title: '歌手',
      component: SingerList
    },
    {
      path: '/singer/info/:id',
      title: '歌手信息',
      component: SingerInfo
    },
    {
        path: '/rank/info/:id',
        title: '排行',
        component: RankInfo
    },
    {
        path: '/plist/list/:id',
        title: '歌单信息',
        component: PlistInfo
    }
  ]
//   export let search = [
//       {
//         path: '/search',
//         title: '搜索',
//         component: Search
//       }
//   ]

export default [...two,...navConfig]