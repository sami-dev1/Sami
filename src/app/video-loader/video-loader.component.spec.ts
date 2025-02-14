import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoLoaderComponent } from './video-loader.component';

describe('VideoLoaderComponent', () => {
  let component: VideoLoaderComponent;
  let fixture: ComponentFixture<VideoLoaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VideoLoaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VideoLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
