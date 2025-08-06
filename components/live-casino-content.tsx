import React from 'react';
import { Dialog, DialogTrigger, DialogContent } from '@radix-ui/react-dialog';
import { Button } from './Button'; // Assuming Button component is imported from here

const LiveCasinoContent: React.FC = () => {
  return (
    <div className="live-casino-content">
      {/* Other content here */}
      <Dialog>
        <DialogTrigger asChild>
          <Button className="bg-brand-primary-green hover:bg-brand-vibrant-green text-brand-charcoal-black font-black px-8 py-3 text-lg rounded-lg transform scale-90 group-hover:scale-100 transition-transform duration-300">
            PLAY NOW
          </Button>
        </DialogTrigger>
        <DialogContent className="max-w-4xl w-full h-[80vh] bg-brand-charcoal-black-secondary border border-brand-smoke-gray/20 p-0">
          <iframe
            src="https://signup.isppro.net/signup?domain=ibetsports.ag&lang=en"
            className="w-full h-full border-0 rounded-lg"
            title="Sign Up for Live Casino"
            allow="fullscreen"
          />
        </DialogContent>
      </Dialog>
      {/* Other content here */}
    </div>
  );
};

export default LiveCasinoContent;
