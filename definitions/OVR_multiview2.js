declare class OVR_multiview2 {
  static +FRAMEBUFFER_ATTACHMENT_TEXTURE_BASE_VIEW_INDEX_OVR: 0x9632;
  static +FRAMEBUFFER_ATTACHMENT_TEXTURE_NUM_VIEWS_OVR: 0x9630;
  static +FRAMEBUFFER_INCOMPLETE_VIEW_TARGETS_OVR: 0x9633;
  static +MAX_VIEWS_OVR: 0x9631;

  framebufferTextureMultiviewOVR(
    target: GLenum,
    attachment: GLenum,
    texture: WebGLTexture | null,
    level: GLint,
    baseViewIndex: GLint,
    numViews: GLsizei,
  ): void;
}
