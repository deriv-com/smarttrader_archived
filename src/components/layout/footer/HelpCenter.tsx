// TODO complete the functionality + add tests + complete the ui
// TODO add tests for staticurl
import StaticUrl from 'Components/common/StaticUrl';
import Tooltip from 'Components/common/tooltip';

const HelpCenter = () => (
    <Tooltip content='Help center'>
        <StaticUrl href='/help-centre/'>
            <img src='/images/pages/footer/ic-help-centre.svg' alt='Help center icon' />
        </StaticUrl>
    </Tooltip>
);

export default HelpCenter;
