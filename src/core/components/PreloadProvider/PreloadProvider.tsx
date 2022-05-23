import { Component, ReactNode } from 'react'
import { connect } from 'react-redux'
import {AppDispatch, RootState} from '../../../store'
import history from '../../../settings/history'
import { moduleName as authModule } from '../../../modules/Auth/moduleName'
import {fetchProfile} from '../../../modules/common/slices/profile'


interface PreloadProps {
  token?: string
  children: ReactNode
  onAuth?: VoidFunction
  onMain?: VoidFunction
  onFetchProfile?: VoidFunction
}

class PreloadProvider extends Component<PreloadProps> {
  componentDidMount() {
    const { token, onAuth, onMain, onFetchProfile } = this.props

    if (!!token) {
      onFetchProfile()
    } else if (!/^\/auth/.test(window.location.pathname)) {
      onAuth()
    }

    if (token && /^\/auth/.test(window.location.pathname)) {
      onMain()
    }
  }

  componentDidUpdate(prevProps) {
    const { token, onAuth, onMain, onFetchProfile } = this.props

    if (!prevProps.token && token) {
      onMain()
      onFetchProfile()
    }

    if (prevProps.token && !token) {
      onAuth()
    }
  }

  render() {
    const { children } = this.props

    return children
  }
}

const mapStateToProps = (state: RootState) => ({
  token: state[authModule].credentials.accessToken,
})

const mapDispatchToProps = (dispatch: AppDispatch) => ({
  onAuth: () => history.replace('/welcome'),
  onMain: () => history.replace('/'),
  onFetchProfile: () => dispatch(fetchProfile()),
})

export default connect(mapStateToProps, mapDispatchToProps)(PreloadProvider)
