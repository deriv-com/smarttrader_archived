import React from 'react';
import { describe, expect, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import Input from '..';

const mock_props = {
    onChange: vi.fn(),
    value: 'test',
};
describe('Input', () => {
    it('should render the Input component', () => {
        render(<Input {...mock_props} />);
        expect(screen.getByDisplayValue('test')).toBeInTheDocument();
    });
    it('should render the hint', () => {
        render(<Input {...mock_props} hint='hint test value' />);
        expect(screen.getByText('hint test value')).toBeInTheDocument();
    });
    it('should render the leading icon', () => {
        render(<Input {...mock_props} leadingIcon={<img src='/images/leading_image.svg' />} />);
        const image = screen.getByRole('img');
        expect(image).toBeInTheDocument();
        expect(image).toHaveAttribute('src', '/images/leading_image.svg');
        expect(image).toHaveClass('absolute left-4');
    });
    it('should render the trailing icon', () => {
        render(<Input {...mock_props} trailingIcon={<img src='/images/trailing_image.svg' />} />);
        const image = screen.getByRole('img');
        expect(image).toBeInTheDocument();
        expect(image).toHaveAttribute('src', '/images/trailing_image.svg');
        expect(image).toHaveClass('absolute right-4');
    });
    it('should render the label', () => {
        render(<Input {...mock_props} label='label test value' />);
        const label = screen.getByText('label test value');
        expect(label).toBeInTheDocument();
    });
});
