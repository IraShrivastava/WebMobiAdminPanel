import SettingDetails from './SettingDetails/SettingDetails'
import SettingOptions from './SettingOptions/SettingOptions'
import styles from './PageContent.module.css'

function PageContent() {
    return (
        <div className={styles.pageBody}>
            <SettingOptions heading="Event Settings"/>
            <SettingDetails heading="Audience Q&A" />
        </div>
    )
}

export default PageContent
