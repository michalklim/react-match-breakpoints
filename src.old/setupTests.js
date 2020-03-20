import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

require('matchmedia-polyfill')
require('matchmedia-polyfill/matchMedia.addListener')

configure({ adapter: new Adapter() })
