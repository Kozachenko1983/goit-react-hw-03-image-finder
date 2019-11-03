import style from './PhotoCard.module.css'
import Modal from './Modal/Modal'
import PropTypes from 'prop-types';

import React, { Component } from 'react'

export default class PhotoCard extends Component {
    static propTypes = {
        items: PropTypes.shape({
            webformatURL: PropTypes.string.isRequired,
            likes: PropTypes.string.isRequired,
            views: PropTypes.string.isRequired,
            downloads: PropTypes.string.isRequired,
            comments: PropTypes.string.isRequired,
            largeImageURL: PropTypes.string.isRequired,
        }).isRequired
    }
    state = {
        isModal: false
    }
    openModal = () => {
        this.setState({ isModal: true })
    }
    closeModal = () => {
        this.setState({ isModal: false })
    }
    render() {
        const { isModal } = this.state
        return (
            <div className={style.photoCard}>
                <div className={style.image}>
                    <img src={this.props.webformatURL} alt="randomPicture" />
                </div>


                <div className={style.stats}>
                    <p className={style.statsItem}>
                        <i className="material-icons">thumb_up</i>
                        {this.props.likes}
                    </p>
                    <p className={style.statsItem}>
                        <i className="material-icons">visibility</i>
                        {this.props.views}
                    </p>
                    <p className={style.statsItem}>
                        <i className="material-icons">comment</i>
                        {this.props.comments}
                    </p>
                    <p className={style.statsItem}>
                        <i className="material-icons">cloud_download</i>
                        {this.props.downloads}
                    </p>
                </div>

                {/* <!-- Кнопка для открытия модалки с большим изображением, появляется при наведении --> */}
                <button type="button" className={style.fullscreenButton} onClick={this.openModal}>
                    <i className="material-icons">zoom_out_map</i>
                </button>
                {isModal && <Modal onClose={this.closeModal} imageUrl={this.props.largeImageURL} />}
            </div>
        )
    }
}
