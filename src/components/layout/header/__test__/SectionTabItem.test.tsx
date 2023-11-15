import { render, screen } from '@testing-library/react';
import SectionTabItem from '../SectionTabItem';

describe('SectionTabItem', () => {
    it('should render the item with the passed props', () => {
        render(<SectionTabItem alt='image description' label='test label' imageUrl='images/testurl.svg' />);
        expect(screen.getByText('test label')).toBeInTheDocument();
        expect(screen.getByAltText('image description')).toBeInTheDocument();
    });
});
