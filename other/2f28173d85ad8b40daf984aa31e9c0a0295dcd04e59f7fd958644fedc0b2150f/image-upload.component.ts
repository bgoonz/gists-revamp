class ImageSnippet {
  constructor(public src: string, public file: File) {}
}

@Component({
  selector: "bwm-image-upload",
  templateUrl: "image-upload.component.html",
  styleUrls: ["image-upload.component.scss"],
})
export class ImageUploadComponent {
  selectedFile: ImageSnippet;

  constructor(private imageService: ImageService) {}

  processFile(imageInput: any) {
    const file: File = imageInput.files[0];
    const reader = new FileReader();

    reader.addEventListener("load", (event: any) => {
      this.selectedFile = new ImageSnippet(event.target.result, file);

      this.selectedFile.pending = true;
      this.imageService.uploadImage(this.selectedFile.file).subscribe(
        (res) => {},
        (err) => {}
      );
    });

    reader.readAsDataURL(file);
  }
}
