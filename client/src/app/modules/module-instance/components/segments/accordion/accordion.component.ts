import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  Injector,
  OnInit
} from '@angular/core';
import {CompiledSegment} from '../../../../../shared/interfaces/compiled-segment.interface';
import {InstanceSegment} from '../../../../../shared/interfaces/module.interface';
import {CompiledField} from '../../../interfaces/compiled-field.interface';
import {compileSegment} from '../../../utils/compile-segment';
import {SEGMENT_DATA} from '../../../utils/create-segment-injector';
import {SegmentComponent, SegmentData} from '../../segment/segment.component';

interface SegmentAccord {
  title?: string;
  description?: string;
  fields?: string[];
  nestedSegments?: InstanceSegment[];
  expanded?: boolean;
}

interface CompiledSegmentAccord {
  title?: string;
  description?: string;
  fields?: CompiledField[];
  nestedSegments?: CompiledSegment[];
  expanded?: boolean;
}

@Component({
  selector: 'jms-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AccordionComponent extends SegmentComponent implements OnInit {
  constructor(
    @Inject(SEGMENT_DATA) public sData: SegmentData,
    public injector: Injector
  ) {
    super(sData, injector);
  }

  accordions: CompiledSegmentAccord[];

  ngOnInit() {
    super.ngOnInit();

    this.accordions = (this.sData.segment.configuration || []).map(
      (accord: SegmentAccord) => ({
        title: accord.title,
        fields: (accord.fields || []).map(key =>
          this.sData.parser.field(
            key,
            this.pointers[key],
            this.sData.definitions
          )
        ),
        nestedSegments: (accord.nestedSegments || []).map(segment =>
          compileSegment(
            segment,
            this.sData.parser,
            this.sData.definitions,
            this.injector,
            this.segment.entryValue
          )
        )
      })
    );
  }
}
