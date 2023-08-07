import Banner from './components/Banner/Banner';
import Tabs from './components/Course/Courses';
import Articles from './components/Articles/index';

import Dedicated from './components/Dedicated/index';
import Events from './components/Events/index'

export default function Home() {
  return (
<main>
  <Banner />
  <Tabs />
  <Dedicated />
  <Articles />
 
  <Events />
  
</main>
  )
}