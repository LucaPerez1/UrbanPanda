import './loadingBar.css'

const LoadingBar = () => {
    return (
        <div className='loadingContainer'>
            <div class="spinner-border loadingBar" role="status">
                <span class="visually-hidden"></span>
            </div>
        </div>
    );
};

export default LoadingBar